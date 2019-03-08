import {ERROR_CODES} from "./constants";
import {LoginPage} from "../pages/login/login";

export const showAlert = (alertCtrl, message, title = null, buttons = null) => {
    buttons = buttons || [{ text: "Ok" }];
    title = title || 'Sucesso';

    let alert = alertCtrl.create({ title: title, buttons: buttons });
    alert.setMessage(message);
    alert.present();
};

export const showErrorAlert = (alertCtrl, message) => {
    showAlert(alertCtrl, message, 'Erro');
};

export const logout = (navCtrl) => {
    localStorage.clear();
    navCtrl.setRoot(LoginPage);
};

export const validateToken = (errorCode, navCtrl) => {
    if (errorCode === ERROR_CODES.TOKEN_NOT_FOUND ||
        errorCode === ERROR_CODES.EXPIRED_TOKEN ||
        errorCode === ERROR_CODES.INVALID_TOKEN) {

        logout(navCtrl);
        return false;
    }

    return true;
};