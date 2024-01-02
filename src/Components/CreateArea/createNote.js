 export function switchToSecond (){
    document.getElementById('secondTextFeild').focus();
}
export const hideIcons = () => {
    const iconsTextField = document.getElementById('iconsTextFeildId');
    const pinIcon = document.getElementById('pinIcon');

    if (iconsTextField) {
      iconsTextField.style.display = 'none';
    }
    if (pinIcon) {
        pinIcon.style.display = 'flex';
    }
  };


export const showIcons = () => {
    const iconsTextField = document.getElementById('iconsTextFeildId');
    const pinIcon = document.getElementById('pinIcon');

    if (iconsTextField) {
      iconsTextField.style.display = 'flex';
    }

    if (pinIcon) {
        pinIcon.style.display = 'none';
    }
  };
