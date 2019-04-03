import { MyApp } from './app.component';
import {ERROR_CODES} from "./constants";

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
    document.querySelector(".tabbar").setAttribute("style", "z-index:-1");
    localStorage.clear();
    navCtrl.setRoot(MyApp);
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

export const getLoggedUser = () => {
    return {
        userId: localStorage.getItem('userId'),
        userName: localStorage.getItem('userName'),
        userEmail: localStorage.getItem('userEmail'),
        userAdmin: localStorage.getItem('userAdmin') === "true"
    };
};
