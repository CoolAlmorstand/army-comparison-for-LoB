

import { terrains } from "../configs/terrains.js"
import { getRating } from "../algorithm/get-rating.js"
import { InitializeArmy } from "../initialize/initialize.js"
function buildArmyJson(inputMap){
    
    const army = {
        army1: {
            units: {}
        },
        army2: {
           units: {}
        }
    }
    
    for(let team in inputMap){
        for(let unitId in inputMap[team]){
            
            const amount = parseInt(inputMap[team][unitId].inputField.value)
            
            if(amount < 1){ continue }
                
            army[team].units[unitId] = {
                amount: amount
            }
        }
        
    }
    
    return army
}


function getArmyEditorInputMap(){
    const inputMap = {
        army1: {},
        army2: {},
    }
    const countInputFieldsArray = Array.from(document.getElementsByClassName("count-input"))
    const countButtonsArray = Array.from(document.getElementsByClassName("count-button"))
    
    for(let countInputField of countInputFieldsArray){
        
        const data = JSON.parse(countInputField.dataset.actions)
        const team = data.team
        const unitId = data.unitId
        
        inputMap[team][unitId] = {}
        inputMap[team][unitId].inputField = countInputField
    }
    
    for(let countButton of countButtonsArray){
    
        const data = JSON.parse(countButton.dataset.actions)
        const team = data.team
        const unitId = data.unitId
        const increment = data.increment == "positive" ? 1 : -1
        
        countButton.addEventListener("click", () => {
            
            const inputField = inputMap[team][unitId].inputField
            const value = parseInt(inputField.value)
            
            if(value + increment >= 0 ){
                inputField.value = value + increment
            }
            
            
        })
    }
    
    return inputMap
}



// Modal Control Functions
document.addEventListener('DOMContentLoaded', function() {
    // Button references
    const inputMap = getArmyEditorInputMap()
    const army2PowerValue = document.getElementById("army2-power-value")
    const army1PowerValue = document.getElementById("army1-power-value")
    
    
    const terrainButton = document.getElementById('terrain-button');
    const army1Button = document.getElementById('army1-button');
    const army2Button = document.getElementById('army2-button');
    const calculateButton = document.getElementById('calculate-button');
    
    // Modal references
    const terrainModal = document.getElementById('terrain-modal');
    const army1Modal = document.getElementById('army1-modal');
    const army2Modal = document.getElementById('army2-modal');
    const comparisonsTable = document.getElementById("comparison-modal")

    // Close button references
    const closeTerrainModal = document.getElementById('close-terrain-modal');
    const closeArmy1Modal = document.getElementById('close-army1-modal');
    const closeArmy2Modal = document.getElementById('close-army2-modal');
    const closeComparisonModal =  document.getElementById("close-comparison-modal")
    
    // Open modals
    terrainButton.addEventListener('click', function() {
        terrainModal.style.display = 'flex';
    });
    
    army1Button.addEventListener('click', function() {
        army1Modal.style.display = 'flex';
    });
    
    army2Button.addEventListener('click', function() {
        
        army2Modal.style.display = 'flex';
    });
    
    calculateButton.addEventListener("click", () => {
        const {army1, army2 } = buildArmyJson(inputMap)
        InitializeArmy(army1)
        InitializeArmy(army2)
        const rating = getRating(army1, army2)
        army1PowerValue.textContent = (rating.powerRating.army1RelativeStrength * 100).toFixed(3) + "%"
        army2PowerValue.textContent = (rating.powerRating.army2RelativeStrength * 100).toFixed(3)+ "%"
        
        army2PowerValue.style.color = "black"
        army1PowerValue.style.color = "black"
        if( rating.powerRating.army1RelativeStrength.toFixed(3) > rating.powerRating.army2RelativeStrength.toFixed(3)){
            army2PowerValue.style.color = "#d32f2f"
        }
        else if(rating.powerRating.army1RelativeStrength.toFixed(3) < rating.powerRating.army2RelativeStrength.toFixed(3)) {
            army1PowerValue.style.color = "#d32f2f"
        }
        else {
            army2PowerValue.style.color = "#f9a825"
            army1PowerValue.style.color = "#f9a825"
        }
        comparisonsTable.style.display = "flex"
    })
    
    // Close modals
    closeTerrainModal.addEventListener('click', function() {
        terrainModal.style.display = 'none';
    });
    
    closeArmy1Modal.addEventListener('click', function() {
        army1Modal.style.display = 'none';
    });
    
    closeArmy2Modal.addEventListener('click', function() {
        army2Modal.style.display = 'none';
    });
    
    closeComparisonModal.addEventListener("click", () => {
        comparisonsTable.style.display = "none"
    })
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === terrainModal) {
            terrainModal.style.display = 'none';
        }
        if (event.target === army1Modal) {
            army1Modal.style.display = 'none';
        }
        if (event.target === army2Modal) {
            army2Modal.style.display = 'none';
        }
    });
    
    // Terrain slider functionality
    const terrainSliders = [
        { 
            slider: document.getElementById('land-slider'), 
            valueDisplay: document.getElementById('land-value')
        },
        { 
            slider: document.getElementById('forest-slider'), 
            valueDisplay: document.getElementById('forest-value') 
        },
        { 
            slider: document.getElementById('village-slider'), 
            valueDisplay: document.getElementById('village-value') 
        },
        { 
            slider: document.getElementById('water-slider'), 
            valueDisplay: document.getElementById('water-value') 
        },
        { 
            slider: document.getElementById('road-slider'), 
            valueDisplay: document.getElementById('road-value') 
        }
    ];
    
    // Update slider value displays
    terrainSliders.forEach(item => {
        updateSliderValue(item.slider, item.valueDisplay);
        
        item.slider.addEventListener('input', function() {
            console.log(item.slider.dataset.sliderType)
            terrains[item.slider.dataset.sliderType].weight = parseInt(item.slider.value) / 100
            updateSliderValue(this, item.valueDisplay);
        });
    });
    
    function updateSliderValue(slider, valueDisplay) {
        
        valueDisplay.textContent = slider.value + '%';
    }
});