class pomRegister {
    anyGender() {
        const genderOptions = ['male', 'female'];
        const randomIndex = Math.floor(Math.random() * genderOptions.length);
        const selectedGender = genderOptions[randomIndex];
        cy.log(`Selected gender: ${selectedGender}`);
        return selectedGender;
      }
    
    generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    cy.log(`Generated random string: ${result}`);
    return result;
    }
}

export default new pomRegister()