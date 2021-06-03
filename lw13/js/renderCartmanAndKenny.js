function renderHeadKenny(person) {
    person.beginPath();
    person.arc(200, 199, 64, 0, Math.PI*2);
    person.fillStyle = "#ffeac1";
    person.fill();
  }
  
  function renderEyes(person, eyeCenterLX, eyeCenterLY, eyeCenterRX, eyeCenterRY, width, hight, rotationL, rotationR, pupilCenterLX, pupilCenterLY, pupilCenterRX, pupilCenterRY, pupilRadius) {
    person.beginPath();
    person.lineWidth = 1/3;
    person.fillStyle = "#ffffff";
    person.ellipse(eyeCenterLX, eyeCenterLY, width, hight, rotationL, 0, Math.PI*2);
    person.stroke();
    person.fill();
    person.beginPath()
    person.ellipse(eyeCenterRX, eyeCenterRY, width, hight, rotationR, 0, Math.PI*2);
    person.stroke();
    person.fill();
    person.beginPath();
    person.fillStyle = "#000000";
    person.arc(pupilCenterLX, pupilCenterLY, pupilRadius, 0, Math.PI*2);
    person.fill();
    person.beginPath();
    person.arc(pupilCenterRX, pupilCenterRY, pupilRadius, 0, Math.PI*2);
    person.fill();
  }
  
  function renderDoubleChin(person) {
    person.beginPath();
    person.fillStyle = "#000000";
    person.lineWidth = 1;
    person.moveTo(182, 260);
    person.lineTo(190, 258);
    person.lineTo(225, 260);
    person.lineTo(225, 264);
    person.lineTo(215, 281);
    person.lineTo(194, 276);
    person.lineTo(182, 263);
    person.fill();
    person.beginPath();
    person.moveTo(100, 256);
    person.lineTo(130, 276);
    person.lineTo(150, 286);
    person.lineTo(170, 291);
    person.lineTo(190, 294);
    person.lineTo(218, 295);
    person.lineTo(230, 293);
    person.lineTo(250, 286);
    person.lineTo(270, 275);
    person.lineTo(290, 263);
    person.lineTo(307, 248);
    person.stroke();
  }
  
  function renderMouth(person) {
    person.beginPath();
    person.fillStyle = "#000000";
    person.moveTo(184, 282);
    person.lineTo(205, 285);
    person.lineTo(226, 283);
    person.lineTo(233, 282);
    person.stroke();
    person.beginPath();
    person.fillStyle = "#ffffff";
    person.moveTo(190, 264);
    person.lineTo(198, 264);
    person.lineTo(198, 261);
    person.lineTo(193, 261);
    person.fill();
    person.beginPath();
    person.moveTo(201, 265);
    person.lineTo(209, 265);
    person.lineTo(209, 261);
    person.lineTo(202, 261);
    person.fill();
    person.beginPath();
    person.moveTo(211, 265);
    person.lineTo(221, 265);
    person.lineTo(221, 261);
    person.lineTo(211, 261);
    person.fill();
  }
  
  function renderHeadCartman(person) {
    person.beginPath();
    person.fillStyle = "#ffeac1";
    person.ellipse(200, 200, 129, 106, 0, 0, Math.PI*2);
    person.fill();
  }
  
  function renderCapCartman(person) {
    person.beginPath();
    person.ellipse(200, 200, 130, 107, 0, Math.PI*49/48, Math.PI*93/48, false);
    person.quadraticCurveTo(200, 125, 70, 195);
    person.fillStyle = "#00bac9";
    person.fill();
    person.beginPath();
    person.fillStyle = "#ffe018";
    person.moveTo(67, 199);
    person.quadraticCurveTo(200, 125, 329, 182);
    person.lineTo(327,175);
    person.quadraticCurveTo(197, 116, 68, 193);;
    person.fill();
    person.beginPath();
    person.moveTo(179, 96);
    person.lineTo(181, 105);
    person.lineTo(185, 105);
    person.lineTo(194, 100);
    person.lineTo(196, 100);
    person.quadraticCurveTo(206, 110, 216, 100);
    person.lineTo(218,102);
    person.lineTo(229, 103);
    person.lineTo(232, 99);
    person.lineTo(232, 97);
    person.lineTo(231, 94);
    person.quadraticCurveTo(225, 85, 216, 89);
    person.lineTo(215, 85);
    person.quadraticCurveTo(209, 79, 197, 81);
    person.lineTo(196, 85);
    person.quadraticCurveTo(175, 81, 172, 89);
    person.lineTo(165, 92);
    person.lineTo(160, 93);
    person.lineTo(155, 100);
    person.lineTo(157, 104);
    person.lineTo(170, 105);
    person.fill();
  }
  
  function renderHoodKenny(person) {
    person.lineWidth = 1;
    person.strokeStyle = "#000000";
    person.fillStyle = "#f46600";
    person.beginPath();
    person.arc(201, 200, 118, 0, Math.PI*2);
    person.fill();
    person.beginPath();
    person.fillStyle = "#000000";
    person.ellipse(198, 208, 84, 75, Math.PI/48, 0, Math.PI*2);
    person.lineWidth = 1.1;
    person.stroke();
    person.beginPath();
    person.moveTo(181, 301);
    person.lineTo(185, 293);
    person.quadraticCurveTo(188, 279, 195, 264);
    person.lineTo(198, 272);
    person.lineTo(198, 303);
    person.lineTo(201, 310);
    person.stroke();
  }
  
  function renderBodyCartman(person) {
    person.beginPath();
    person.fillStyle = "#ff1e3f";
    person.moveTo(80, 238);
    person.quadraticCurveTo(66, 239, 36, 284);
    person.lineTo(49, 329);
    person.lineTo(55, 359);
    person.lineTo(58, 359);
    person.quadraticCurveTo(90, 394, 190, 386);
    person.lineTo(220, 386);
    person.quadraticCurveTo(250, 382, 263, 372);
    person.lineTo(270, 370);
    person.lineTo(330, 368);
    person.quadraticCurveTo(359, 365, 360, 324);
    person.lineTo(363, 273);
    person.lineTo(353, 266);
    person.quadraticCurveTo(340, 240, 318, 240);
    person.fill();
    person.beginPath();
    person.lineWidth = 1/2;
    person.moveTo(219, 305);
    person.lineTo(218, 350);
    person.lineTo(216, 365);
    person.lineTo(215, 387);
    person.stroke();
    person.beginPath();
    person.lineWidth = 3;
    person.moveTo(209, 308);
    person.lineTo(209, 315);
    person.stroke();
    person.beginPath();
    person.moveTo(212, 339);
    person.lineTo(212, 346);
    person.stroke();
    person.beginPath();
    person.moveTo(209, 369);
    person.lineTo(209, 376);
    person.stroke();
  }
  
  function renderBodyKenny(person) {
    person.beginPath();
    person.fillStyle = "#f46600";
    person.moveTo(122, 286);
    person.quadraticCurveTo(104, 311, 98, 342);
    person.lineTo(124, 350);
    person.lineTo(121, 369);
    person.quadraticCurveTo(200, 389, 279, 373);
    person.lineTo(279, 365);
    person.lineTo(300, 350);
    person.quadraticCurveTo(298, 315, 278, 286);
    person.fill();
    person.beginPath();
    person.strokeStyle = "#e45700";
    person.lineWidth = 2;
    person.moveTo(130, 372);
    person.quadraticCurveTo(200, 389, 270, 375);
    person.stroke();
    person.beginPath();
    person.strokeStyle = "#000000";
    person.lineWidth = 1;
    person.moveTo(200, 318);
    person.lineTo(200, 381);
    person.stroke();
    person.beginPath();
    person.moveTo(125 ,348);
    person.lineTo(128, 330);
    person.stroke();
    person.beginPath();
    person.moveTo(271 ,349);
    person.lineTo(269, 331);
    person.stroke();
    person.beginPath();
    person.strokeStyle = "#e45700";
    person.lineWidth = 3;
    person.arc(201, 198, 120, Math.PI*5/16, Math.PI*47/64);
    person.stroke();
  }
  
  function renderHandsCartman(person) {
    person.beginPath();
    person.fillStyle = "#ffe018";
    person.moveTo(86, 302);
    person.lineTo(88, 307);
    person.lineTo(92, 309);
    person.quadraticCurveTo(107, 334, 44, 327);
    person.bezierCurveTo(20, 315, 18, 285, 45, 281);
    person.lineTo(55, 284);
    person.fill();
    person.beginPath();
    person.moveTo(336, 276);
    person.lineTo(324, 291);
    person.lineTo(323, 298);
    person.lineTo(317, 305);
    person.lineTo(316, 314);
    person.lineTo(321, 318);
    person.lineTo(333, 316);
    person.lineTo(338, 318);
    person.quadraticCurveTo(358, 332, 375, 316);
    person.lineTo(377, 311);
    person.quadraticCurveTo(373, 267, 359, 273);
    person.fill();
    
  }
  
  function renderHandsKenny(person) {
    person.beginPath();
    person.fillStyle = "#7b4216";
    person.lineWidth = 1;
    person.arc(106, 355, 17, 0, Math.PI*2);
    person.fill();
    person.beginPath();
    person.arc(290, 357, 17, 0, Math.PI*2);
    person.fill();
    person.beginPath();
    person.strokeStyle = "#000000";
    person.arc(118, 350, 7, 0, Math.PI*2);
    person.stroke();
    person.fill();
    person.beginPath();
    person.arc(277, 351, 7, 0, Math.PI*2);
    person.stroke();
    person.fill();
  }
  
  function renderHairKenny(person) {
    person.beginPath();
    person.fillStyle = "#7b4216";
    person.moveTo(202, 134);
    person.bezierCurveTo(131, 168, 131, 223, 195, 263);
    person.bezierCurveTo(95, 270, 95, 125, 202, 134);
    person.fill();
    person.beginPath();
    person.moveTo(202, 134);
    person.bezierCurveTo(260, 175, 262, 232, 195, 263);
    person.bezierCurveTo(295, 282, 299, 140, 202, 134);
    person.fill();
  }
  
  function renderLegs(person, x1, y1, x2, y2, x3, y3, x4, y4, colour) {
    person.beginPath();
    person.fillStyle = colour;
    person.moveTo(x1, y1);
    person.lineTo(x2, y2);
    person.lineTo(x3, y3);
    person.lineTo(x4, y4);
    person.fill();
  }
  
  function renderFeetCartman(person) {
    person.beginPath();
    person.fillStyle = "#322e3d";
    person.moveTo(334, 400);
    person.quadraticCurveTo(270, 385, 200, 398);
    person.quadraticCurveTo(160, 382, 66, 398);
    person.lineTo(66, 403);
    person.quadraticCurveTo(160, 398, 201, 402);
    person.quadraticCurveTo(270, 397, 334, 402);
    person.fill();
  }
  
  function renderFeetKenny(person) {
    person.beginPath();
    person.fillStyle = "#000000";
    person.arc(127, 398, 3, 0, Math.PI*2);
    person.arc(272, 398, 3, 0, Math.PI*2);
    person.fill();
    person.fillRect(127, 395, 145, 6);
  }
  
  function renderCartman() {
    const canvas = document.getElementById('Cartman');
    const Cartman = canvas.getContext('2d');
    renderLegs(Cartman, 60, 359, 74, 399, 328, 399, 341, 359, "#804429");
    renderFeetCartman(Cartman);
    renderBodyCartman(Cartman);
    renderHeadCartman(Cartman);
    renderDoubleChin(Cartman);
    renderCapCartman(Cartman);
    renderMouth(Cartman);
    renderEyes(Cartman, 174, 198, 240, 199, 38, 32, Math.PI*2/3, Math.PI*3/8, 186, 195, 225, 196, 3);
    renderHandsCartman(Cartman);
    
  }
  
  function renderKenny() {
    const canvas = document.getElementById('Kenny');
    const Kenny = canvas.getContext('2d');
    
    renderLegs(Kenny, 130, 371, 130, 400, 269, 400, 270, 371, "#f46600");
    renderFeetKenny(Kenny);
    renderBodyKenny(Kenny);
    renderHoodKenny(Kenny);
    renderHeadKenny(Kenny);
    renderEyes(Kenny, 169, 194, 229, 199, 33, 30, Math.PI*2/3, Math.PI*5/12, 178, 193, 220, 196, 4);
    renderHairKenny(Kenny);
    renderHandsKenny(Kenny);
    }
  
  window.onload = () => {
    renderCartman();
    renderKenny();
  }