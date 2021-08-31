import React from 'react';
import {
    getCertificates,
    getPlugin,
    signCadesBES,
} from '@archivesystems/cryptopro';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';

import Viewer from '../components/Viewer';

// mock cert
function CertificateObj(certObj) {
    this.cert = certObj;
    this.certFromDate = new Date();
    this.certTillDate = new Date();
}
CertificateObj.prototype.GetCertName = function() {
    return 'Тест';
}
CertificateObj.prototype.GetIssuer = function() {
    return 'http://testca.cryptopro.ru/CertEnroll/test-ca-2014_CRYPTO-PRO Test Center 2(1).crt';
}
CertificateObj.prototype.GetCertFromDate = function() {
    return this.certFromDate;
}
CertificateObj.prototype.GetCertTillDate = function() {
    return this.certTillDate;
}

const styles = (theme) => ({
    signField: {
        width: '100%',
    }
});

class DataItemEdit extends React.Component {
    state = {
        certName: null,
        certIssuer: null,
        signature: null,
        certValue: '',
        signValue: '',
    }

    async componentDidMount() {
        const plugin = await getPlugin();
        const certificates = await getCertificates(plugin);

        const certObj = new CertificateObj(certificates[0]);

        this.setState({
            certValue: `Имя сертификата: ${certObj.GetCertName()}, Выдан: ${certObj.GetIssuer()}`,
        })

        if (certificates.length > 0) {
            const data = 'Hello world';
            const signature = await signCadesBES(
                plugin,
                certificates[0],
                data,
                'Document name'
            );
            this.setState({ signValue: signature });
        } else {
            console.log('No certificates found');
        }
    }

    // handleChange = (event)  => {
    //     this.setState({
    //         value: event.value,
    //     });
    // };

    render() {
        const { classes } = this.props;

        return (
            <Box display="flex" mt={5}>
                <Box mr={5}>
                    <Viewer />
                </Box>
                <div style={{ flexGrow: 1 }}>
                    <Box bgcolor="background.paper" border={1} borderColor="grey.300" borderRadius={16} p={3}>
                        <Typography variant="h6" component="h6" gutterBottom>
                            Общая информация
                        </Typography>
                        Какая-то общая информация о документе
                    </Box>
                    <Box p={3}>
                        <Box mb={1}>
                            <TextField
                                id="cert-field"
                                label="Сертификат"
                                multiline
                                maxRows={4}
                                value={this.state.certValue || ''}
                                //onChange={this.handleChange}
                                className={classes.signField}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Box>
                        <Box mb={3}>
                            <TextField
                                id="sign-field"
                                label="Подпись"
                                multiline
                                maxRows={8}
                                value={this.state.signValue || ''}
                                //onChange={this.handleChange}
                                className={classes.signField}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box mr={1}>
                                <Button variant="contained" color="primary">Подписать</Button>
                            </Box>
                            <a href={'data:attachment/text,' + encodeURI(this.state.signValue)} download="mySignature.sig">Выгрузить подпись в файл</a>
                        </Box>
                    </Box>
                </div>
            </Box>
        );
    }
}

export default withStyles(styles)(DataItemEdit);
