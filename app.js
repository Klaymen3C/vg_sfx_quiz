var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var sfxBox = document.getElementById("sfxBox");
//Crear un nuevo reproductor
function crearSoundPlayer(id, name, sound) {
    var soundDiv = document.createElement('div');
    soundDiv.classList.add('soundplayer');
    soundDiv.innerHTML = "\n        <audio id= \"audio-".concat(id, "\" src=\"").concat(sound, "\"></audio>\n        <button id=\"btnPlay-").concat(id, "\" class=\"btn-play\">\n            <svg class=\"svg-play\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M15 12.3301L9 16.6603L9 8L15 12.3301Z\" fill=\"currentColor\" />\n            </svg>\n        </button>\n        <input class=\"input-sound-name\" id=\"inputSoundName-").concat(id, "\" type=\"text\" placeholder=\"Input answer...\">\n        <p class =\"id-sfx\" id=\"").concat(id, "\">").concat(id, "</p>\n\n    ");
    sfxBox.appendChild(soundDiv);
    var audio = document.getElementById("audio-".concat(id));
    var btnPlay = document.getElementById("btnPlay-".concat(id));
    function playSound() {
        btnPlay === null || btnPlay === void 0 ? void 0 : btnPlay.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
            }
        });
    }
    playSound();
    var input = document.getElementById("inputSoundName-".concat(id));
    input.addEventListener('input', function () {
        checkAnswer(id, name);
    });
    checkAnswer(id, name);
}
window.crearSoundPlayer = crearSoundPlayer;
function chargeSounds() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('sounds.json')];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    data.forEach(function (sound) {
                        crearSoundPlayer(sound.id, sound.name, sound.sound);
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log('Error al cargar el JSON', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', chargeSounds);
//verificar respuesta
function checkAnswer(id, name) {
    var input = document.querySelector("#inputSoundName-".concat(id));
    if (input) {
        var userAnswer_1 = input.value.trim().toLowerCase();
        var validAnswers = Array.isArray(name) ? name : [name];
        var isCorrect = validAnswers.some(function (ans) { return ans.toLowerCase() === userAnswer_1; });
        if (isCorrect) {
            input.style.color = 'green';
        }
        else {
            input.style.color = 'red';
        }
    }
}
