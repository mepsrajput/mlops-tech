const allButtons = document.querySelectorAll('.btn');
const indButtons = document.querySelectorAll(".ind");
const clickedButtons = document.querySelectorAll(".clicked");
const form = document.querySelector('form');
const generalButton = document.querySelector('#general');
const mlButton = document.querySelector('#ml');
const visualisationButton = document.querySelector('#visualisation');
const allButton = document.querySelector('#all-button');
const outputDiv = document.querySelector('#output');
const copyButton = document.querySelector('#copy-button');

const generalText = '<pre># data analysis and wrangling\nimport pandas as pd\nimport numpy as np\nfrom IPython.display import IFrame\nfrom pandas_profiling import ProfileReport</pre>';
const mlText = '<pre># ML - Classifiers\nfrom sklearn.linear_model import LogisticRegression, SGDClassifier\nfrom sklearn.svm import SVC, LinearSVC\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.naive_bayes import GaussianNB\nfrom sklearn.tree import DecisionTreeClassifier</pre>';
const visualisationText = '<pre># visualization\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n%matplotlib inline</pre>';
// Code for button selection

indButtons.forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('clicked');
        updateAllButton();
    });
});

allButton.addEventListener('click', function () {
    const elements = toArray(indButtons);
    if (allHaveClass(elements, 'clicked')) {
        elements.forEach(element => element.classList.remove('clicked'));
    } else {
        indButtons.forEach(button => {
            if (!button.classList.contains('clicked')) {
                button.classList.add('clicked');
            }
        });
    }
    updateAllButton();
});

function updateAllButton() {
    const elements = toArray(indButtons);
    if (allHaveClass(elements, 'clicked')) {
        allButton.classList.add('clicked');
    } else {
        allButton.classList.remove('clicked');
    }
}

function toArray(nodeList) {
    return Array.from(nodeList);
}

function allHaveClass(elements, className) {
    return elements.every(element => element.classList.contains(className));
}

// Insert text on DOM based on selection

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from being submitted

    outputDiv.innerHTML = ''; // clear the output

    if (generalButton.classList.contains('clicked')) {
        outputDiv.innerHTML += generalText;
    }
    if (mlButton.classList.contains('clicked')) {
        outputDiv.innerHTML += mlText;
    }
    if (visualisationButton.classList.contains('clicked')) {
        outputDiv.innerHTML += visualisationText;
    }
    if (!generalButton.classList.contains('clicked') && !mlButton.classList.contains('clicked') && !visualisationButton.classList.contains('clicked')) {
        outputDiv.innerHTML += generalText + mlText + visualisationText;
    }
});

// Copy the output
copyButton.addEventListener('click', async function () {
    try {
        const output = document.querySelector('#output');
        await navigator.permissions.query({ name: 'clipboard-write' });
        await navigator.clipboard.writeText(output.textContent);
    } catch (err) {
        console.error('Unable to copy');
    }
});