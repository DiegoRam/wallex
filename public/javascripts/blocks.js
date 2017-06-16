Blockly.Blocks['rate'] = {
    init: function() {
        this.appendValueInput('rate')
            .appendField('Rate');
        this.setOutput(true);
        this.setColour(160);
    }
};

Blockly.Blocks['exchangerate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Rate 1")
            .appendField(new Blockly.FieldDropdown([["BTC","USD"], ["ETH","EUR"], ["USD","ARS"]]), "FIAT")
            .appendField(new Blockly.FieldDropdown([["=","="], ["<","<"], [">",">"]]), "symbol")
            .appendField(new Blockly.FieldDropdown([["ARS","ARS"], ["USD","USD"], ["PHL","PHL"]]), "NAME")
            .appendField(new Blockly.FieldTextInput("0.00"), "NAME");
        this.setOutput(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['StreamName'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
            .appendField("Stream name")
            .appendField(new Blockly.FieldTextInput("myStream"), "NAME");
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sendmoney'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Send")
            .appendField(new Blockly.FieldDropdown([["BTC","BTC"], ["USD","USD"], ["ETH","ETH"]]), "NAME");
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['visa4809'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Prepaid Visa *4908");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};