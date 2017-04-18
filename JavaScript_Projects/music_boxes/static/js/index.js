
$(document).ready( function() {
    
    // This controls the button for the c note.
    
    // This variable calls the cNote audio element in the HTML.
    var cNote = document.getElementById('cAudio');
    var dNote = document.getElementById('dAudio');
    var eNote = document.getElementById('eAudio');
    var fNote = document.getElementById('fAudio');
    var gNote = document.getElementById('gAudio');
    var aNote = document.getElementById('aAudio');
    var bNote = document.getElementById('bAudio');

    // Mouse down on div box, and run function
    $('#c').mousedown(function(){
        cNote.currentTime = 0;
        cNote.play();
    });

    $('#d').mousedown(function(){
        dNote.currentTime = 0;
        dNote.play();
    });

    $('#e').mousedown(function(){
        eNote.currentTime = 0;
        eNote.play();
    });

    $('#f').mousedown(function(){
        fNote.currentTime = 0;
        fNote.play();
    });

    $('#g').mousedown(function(){
        gNote.currentTime = 0;
        gNote.play();
    });

    $('#a').mousedown(function(){
        aNote.currentTime = 0;
        aNote.play();
    });

    $('#b').mousedown(function(){
        bNote.currentTime = 0;
        bNote.play();
    });

});