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
