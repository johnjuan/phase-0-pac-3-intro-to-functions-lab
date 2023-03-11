function shout(string) {
    return string.toUpperCase();
  }
"Hello!".toUpperCase(); // 'HELLO!'

function whisper(string) {
    return string.toLowerCase()
  }
"hello!".toLowerCase(); // 'hello!'

function logShout(string) {
    console.log(string.toUpperCase( ));
  }
"HELLO!".toUpperCase(); // 'HELLO!'

function logWhisper(string) {
    console.log(string.toLowerCase( ));
  }
"hello!".toLowerCase(); // 'hello!'

function sayHiToHeadphonedRoommate (string) {
    let chy= "I can't hear you!";
    let yid= "YES INDEED!";
    let iwlt= "I would love to!";   
    if (string.toLowerCase(string) === string) {
        return chy;
    }
    else if (string.toUpperCase(string) === string) {
        return yid;
    }
    else if ("Let's have dinner together!" === string) {
        return iwlt;
    }


}