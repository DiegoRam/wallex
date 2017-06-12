Blockly.Blocks['placeOrder'] = {
    init: function() {
        this.appendValueInput('limit')
            .setCheck('String')
            .appendField('Limit of');
        this.setOutput(true, 'Number');
        this.setColour(160);
        this.setTooltip('Returns limit of the order');
    }
};
