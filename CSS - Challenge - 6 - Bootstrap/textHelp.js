function productNameHelp() {
    document.getElementById('helpText').innerHTML = "Designate the name of the product that you want to upload. The name should containd letters and numbers and shouldn't be longer than 50 characters";
    }

function productBrandHelp() {
    document.getElementById('helpText').innerHTML = "Select the Brand of the product that you want to upload. You can only select one of the brands.";
    }

function productColorHelp() {
    document.getElementById('helpText').innerHTML = "Select the available colors for the product that you want to upload. You can select all the related colors for the product.";
    }

function productDescriptionHelp() {
    document.getElementById('helpText').innerHTML = "Provide a brief description of the product that you want to upload. Focus on notorious characteristics and keep it under 200 characters.";
    }

function productImageHelp() {
    document.getElementById('helpText').innerHTML = "Provide an image of the product that you want to upload. It should be a JPG file and under the size of 2mb.";
    }
  
const helpText = ""
document.getElementById('helpText').innerHTML = helpText;