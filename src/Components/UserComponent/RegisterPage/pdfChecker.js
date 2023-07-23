// utils/pdfValidator.js
const validatePDFFile = (file) => {
    if (!file) {
        return { isValid: false, message: 'Please select a PDF file.' };
    }
    if (file.type !== 'application/pdf') {
        return { isValid: false, message: 'Please select a valid PDF file.' };
    }
    if (file.size > 2 * 1024 * 1024) {
        return { isValid: false, message: 'Please select a PDF file less than 2 MB.' };
    }
    return { isValid: true, message: '' };
};

export default validatePDFFile;
