var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
// PWA class => project fugu and other apis.
var PWA = /** @class */ (function () {
    function PWA() {
    }
    /**
     * Copy text to the clipboard.
     * @method copyText
     */
    PWA.prototype.copyText = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!navigator.clipboard) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(text)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { ok: true, message: "Copied" }];
                    case 2: return [2 /*return*/, {
                            ok: false,
                            message: "Copy Text API not supported",
                        }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read text from the clipboard.
     * @method readText
     */
    PWA.prototype.readText = function () {
        return __awaiter(this, void 0, void 0, function () {
            var text, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!navigator.clipboard) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.readText()];
                    case 1:
                        text = _a.sent();
                        return [2 /*return*/, { ok: true, message: "Read", text: text }];
                    case 2: return [2 /*return*/, { ok: false, message: "Read Text API not supported", text: null }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        throw error_2;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copy an image to the clipboard.
     * @method copyImage
     */
    PWA.prototype.copyImage = function (imgURL) {
        return __awaiter(this, void 0, void 0, function () {
            var data, blob, error_3;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        if (!navigator.clipboard) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetch(imgURL)];
                    case 1:
                        data = _b.sent();
                        return [4 /*yield*/, data.blob()];
                    case 2:
                        blob = _b.sent();
                        return [4 /*yield*/, navigator.clipboard.write([
                                new ClipboardItem((_a = {},
                                    _a[blob.type] = blob,
                                    _a)),
                            ])];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, {
                                ok: true,
                                message: "Image copied",
                            }];
                    case 4: return [2 /*return*/, { ok: false, message: "Copy Image API not supported" }];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _b.sent();
                        throw error_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read files from the clipboard.
     * @method readFiles
     */
    PWA.prototype.readFiles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, items, _i, items_1, item, _a, _b, type, blob, file, error_4;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 10, , 11]);
                        if (!navigator.clipboard) return [3 /*break*/, 8];
                        files = [];
                        return [4 /*yield*/, navigator.clipboard.read()];
                    case 1:
                        items = _c.sent();
                        _i = 0, items_1 = items;
                        _c.label = 2;
                    case 2:
                        if (!(_i < items_1.length)) return [3 /*break*/, 7];
                        item = items_1[_i];
                        _a = 0, _b = item.types;
                        _c.label = 3;
                    case 3:
                        if (!(_a < _b.length)) return [3 /*break*/, 6];
                        type = _b[_a];
                        return [4 /*yield*/, item.getType(type)];
                    case 4:
                        blob = _c.sent();
                        file = new File([blob], "clipboard-file", { type: type });
                        files.push(file);
                        _c.label = 5;
                    case 5:
                        _a++;
                        return [3 /*break*/, 3];
                    case 6:
                        _i++;
                        return [3 /*break*/, 2];
                    case 7: return [2 /*return*/, { ok: true, message: "Read", files: files }];
                    case 8: return [2 /*return*/, { ok: false, message: "Read Files API not supported", files: null }];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        error_4 = _c.sent();
                        throw error_4;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Share stuff to other apps.
     * @method Share
     */
    PWA.prototype.Share = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        if (!data.files) return [3 /*break*/, 4];
                        if (!(navigator.canShare && navigator.canShare(data))) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.share(data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { ok: true, message: "Shared" }];
                    case 2: return [2 /*return*/, { ok: false, message: "Share Files API not supported" }];
                    case 3: return [3 /*break*/, 7];
                    case 4:
                        if (!navigator.share) return [3 /*break*/, 6];
                        return [4 /*yield*/, navigator.share(data)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, { ok: true, message: "Shared" }];
                    case 6: return [2 /*return*/, { ok: false, message: "Web Share API not supported" }];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_5 = _a.sent();
                        throw error_5;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Read contacts from the device.
     * @method Contacts
     */
    PWA.prototype.Contacts = function (props, options) {
        return __awaiter(this, void 0, void 0, function () {
            var contacts, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!("contacts" in navigator && "ContactsManager" in window)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.contacts.select(props, options)];
                    case 1:
                        contacts = _a.sent();
                        return [2 /*return*/, { ok: true, message: "Selected", contacts: contacts }];
                    case 2: return [2 /*return*/, { ok: false, message: "Contacts Picker API not supported" }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_6 = _a.sent();
                        throw error_6;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the connectivity status, offline, online, etc.
     * @method Connectivity
     */
    PWA.prototype.Connectivity = function (online, offline) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    if (navigator.onLine) {
                        online();
                        return [2 /*return*/, { ok: true, message: "Online" }];
                    }
                    else {
                        offline();
                        return [2 /*return*/, { ok: true, message: "Offline" }];
                    }
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Set notification icon badge, count.
     * @method setBadge
     */
    PWA.prototype.setBadge = function (unreadCount) {
        return __awaiter(this, void 0, void 0, function () {
            var error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!navigator.setAppBadge) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.setAppBadge(unreadCount)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { ok: true, message: "Set" }];
                    case 2: return [2 /*return*/, {
                            ok: false,
                            message: "Badging API not supported",
                        }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_7 = _a.sent();
                        throw error_7;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Clear all notification icon badge counts.
     * @method clearBadge
     */
    PWA.prototype.clearBadge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!navigator.clearAppBadge) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clearAppBadge()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { ok: true, message: "Cleared" }];
                    case 2: return [2 /*return*/, { ok: false, message: "Badging API not supported" }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_8 = _a.sent();
                        throw error_8;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Index content for offline access in the browser.
     * @method contentIndexing
     */
    PWA.prototype.contentIndexing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registration_1, error_9;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.serviceWorker.ready];
                    case 1:
                        registration_1 = (_a.sent());
                        // Remember to feature-detect before using the API:
                        if ("index" in registration_1) {
                            return [2 /*return*/, {
                                    ok: true,
                                    getAll: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var error_10;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, registration_1.index.getAll()];
                                                case 1: return [2 /*return*/, (_a.sent())];
                                                case 2:
                                                    error_10 = _a.sent();
                                                    throw error_10;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                    addItem: function (item) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_11;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    // Add to content index.
                                                    return [4 /*yield*/, registration_1.index.add(__assign(__assign({}, item), { category: item.category || "" }))];
                                                case 1:
                                                    // Add to content index.
                                                    _a.sent();
                                                    return [2 /*return*/, { ok: true, message: "Added" }];
                                                case 2:
                                                    error_11 = _a.sent();
                                                    throw error_11;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                    removeItem: function (id) { return __awaiter(_this, void 0, void 0, function () {
                                        var error_12;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    _a.trys.push([0, 2, , 3]);
                                                    return [4 /*yield*/, registration_1.index.delete(id)];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/, { ok: true, message: "Removed" }];
                                                case 2:
                                                    error_12 = _a.sent();
                                                    throw error_12;
                                                case 3: return [2 /*return*/];
                                            }
                                        });
                                    }); },
                                    message: "Context Indexing ready",
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    ok: false,
                                    message: "Content Indexing API not supported",
                                }];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_9 = _a.sent();
                        throw error_9;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Set fullscreen mode.
     * @method Fullscreen
     */
    PWA.prototype.Fullscreen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!document.fullscreenEnabled) return [3 /*break*/, 2];
                        return [4 /*yield*/, document.documentElement.requestFullscreen()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { ok: true, message: "Fullscreen" }];
                    case 2: return [2 /*return*/, { ok: false, message: "Fullscreen disabled" }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_13 = _a.sent();
                        throw error_13;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Send notification to the user.
     * @method Notification
     */
    PWA.prototype.Notification = function (data) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var title, options, permission, registration, error_14;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        title = data.title, options = data.options;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 11, , 12]);
                        if (!("Notification" in window)) return [3 /*break*/, 9];
                        return [4 /*yield*/, Notification.requestPermission()];
                    case 2:
                        permission = _b.sent();
                        if (!(permission === "granted")) return [3 /*break*/, 7];
                        return [4 /*yield*/, navigator.serviceWorker.ready];
                    case 3:
                        registration = _b.sent();
                        if (!registration.showNotification) return [3 /*break*/, 5];
                        return [4 /*yield*/, registration.showNotification(title, options)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, {
                                ok: true,
                                message: "actions" in ((_a = window.Notification) === null || _a === void 0 ? void 0 : _a.prototype)
                                    ? "Notification sent"
                                    : "Notification sent, but actions not supported",
                            }];
                    case 5: return [2 /*return*/, {
                            ok: false,
                            message: "Notification not sent, there is an issue with your service worker registration",
                        }];
                    case 6: return [3 /*break*/, 8];
                    case 7: return [2 /*return*/, { ok: true, message: "Denied" }];
                    case 8: return [3 /*break*/, 10];
                    case 9: return [2 /*return*/, { ok: false, message: "Notification API not supported" }];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        error_14 = _b.sent();
                        throw error_14;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Install a PWA to the user's device.
     * @method Install
     */
    PWA.prototype.Install = function (type, callback) {
        if (type === void 0) { type = "installed"; }
        return __awaiter(this, void 0, void 0, function () {
            var checkIfAppInstalled, beforeInstallPromptEvent, installApp, _a, error_15;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 11, , 12]);
                        if (!navigator.serviceWorker) return [3 /*break*/, 9];
                        checkIfAppInstalled = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                try {
                                    window.addEventListener("appinstalled", function () {
                                        callback("installed");
                                    });
                                    return [2 /*return*/, { ok: true, message: "Check if installed" }];
                                }
                                catch (error) {
                                    throw error;
                                }
                                return [2 /*return*/];
                            });
                        }); };
                        beforeInstallPromptEvent = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                try {
                                    window.addEventListener("beforeinstallprompt", function (event) {
                                        callback(event);
                                    });
                                    return [2 /*return*/, { ok: true, message: "Before install prompt" }];
                                }
                                catch (error) {
                                    throw error;
                                }
                                return [2 /*return*/];
                            });
                        }); };
                        installApp = function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                try {
                                    callback("install");
                                    return [2 /*return*/, { ok: true, message: "Install App" }];
                                }
                                catch (error) {
                                    throw error;
                                }
                                return [2 /*return*/];
                            });
                        }); };
                        _a = type;
                        switch (_a) {
                            case "before": return [3 /*break*/, 1];
                            case "install": return [3 /*break*/, 3];
                            case "installed": return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, beforeInstallPromptEvent()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, installApp()];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [4 /*yield*/, checkIfAppInstalled()];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7: return [2 /*return*/, { ok: false, message: "Type can be 'install', 'installed' or 'before'" }];
                    case 8: return [3 /*break*/, 10];
                    case 9: return [2 /*return*/, { ok: false, message: "Service Worker not supported" }];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        error_15 = _b.sent();
                        throw error_15;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Idle detection for the device, when the user is not doing anything.
     * @method idleDetection
     */
    PWA.prototype.idleDetection = function (action, callback, threshold) {
        if (action === void 0) { action = "start"; }
        if (callback === void 0) { callback = function () {
            // Idle.
        }; }
        if (threshold === void 0) { threshold = 60000; }
        return __awaiter(this, void 0, void 0, function () {
            var state, controller, signal, idleDetector_1, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        if (!("IdleDetector" in window)) return [3 /*break*/, 7];
                        return [4 /*yield*/, IdleDetector.requestPermission()];
                    case 1:
                        state = _a.sent();
                        if (!(state === "granted")) return [3 /*break*/, 5];
                        controller = new AbortController();
                        signal = controller.signal;
                        idleDetector_1 = new IdleDetector();
                        idleDetector_1.addEventListener("change", function () {
                            var userState = idleDetector_1.userState;
                            if (userState === "idle")
                                callback();
                        });
                        if (!(action === "start")) return [3 /*break*/, 3];
                        return [4 /*yield*/, idleDetector_1.start({
                                threshold: threshold > 60000 ? threshold : 60000,
                                signal: signal,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, { ok: true, message: "Started" }];
                    case 3:
                        controller.abort();
                        return [2 /*return*/, { ok: true, message: "Aborted" }];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, { ok: false, message: "Need to request permission first" }];
                    case 6: return [3 /*break*/, 8];
                    case 7: return [2 /*return*/, { ok: false, message: "Idle Detection API not supported" }];
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_16 = _a.sent();
                        throw error_16;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Prevent the device's screen from turning off so that the user can see the information
     * that's displayed on screen.
     * @method wakeLock
     */
    PWA.prototype.wakeLock = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wakeLock, error_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!("wakeLock" in navigator)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.wakeLock.request("screen")];
                    case 1:
                        wakeLock = _a.sent();
                        if (wakeLock) {
                            return [2 /*return*/, { ok: true, message: "WakeLock Active" }];
                        }
                        else {
                            return [2 /*return*/, { ok: false, message: "WakeLock Failed" }];
                        }
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, { ok: false, message: "WakeLock API not supported" }];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_17 = _a.sent();
                        throw error_17;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Check if user is viewing a page. Pause/play video or games.
     * @method Visibility
     */
    PWA.prototype.Visibility = function (isVisible, notAvailable) {
        return __awaiter(this, void 0, void 0, function () {
            var state;
            return __generator(this, function (_a) {
                try {
                    if (document.visibilityState) {
                        state = document.visibilityState;
                        if (state === "visible") {
                            isVisible();
                            return [2 /*return*/, { ok: true, message: "Visible" }];
                        }
                    }
                    else {
                        notAvailable();
                        return [2 /*return*/, {
                                ok: false,
                                message: "Visibility API not supported",
                            }];
                    }
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Pick text files from the device.
     * @method pickTextFile
     */
    PWA.prototype.pickTextFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fileHandle, file, typeList, contents, error_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        fileHandle = void 0;
                        return [4 /*yield*/, window.showOpenFilePicker()];
                    case 1:
                        fileHandle = (_a.sent())[0];
                        return [4 /*yield*/, fileHandle.getFile()];
                    case 2:
                        file = _a.sent();
                        if (!file) return [3 /*break*/, 6];
                        typeList = file.type.split("/");
                        if (!typeList.includes("text")) return [3 /*break*/, 4];
                        return [4 /*yield*/, file.text()];
                    case 3:
                        contents = _a.sent();
                        return [2 /*return*/, { ok: true, message: "File picked", contents: contents }];
                    case 4: return [2 /*return*/, { ok: false, message: "File Picker API not supported" }];
                    case 5: return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, { ok: false, message: "Please pick text type file" }];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        error_18 = _a.sent();
                        throw error_18;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pick any file types from the device.
     * @method pickFile
     */
    PWA.prototype.pickFile = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var fileHandle, _a, file, error_19;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        fileHandle = void 0;
                        if (!options) return [3 /*break*/, 2];
                        return [4 /*yield*/, window.showOpenFilePicker(options)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, window.showOpenFilePicker()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        fileHandle = (_a)[0];
                        return [4 /*yield*/, fileHandle.getFile()];
                    case 5:
                        file = _b.sent();
                        if (file) {
                            return [2 /*return*/, {
                                    file: file,
                                    ok: true,
                                    message: "File picked",
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    file: null,
                                    ok: false,
                                    message: "File Picker API not supported",
                                }];
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_19 = _b.sent();
                        throw error_19;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Get the display mode of your progressive web app.
     * @method displayMode
     */
    PWA.prototype.displayMode = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    window.addEventListener("DOMContentLoaded", function () {
                        var displayMode = window.matchMedia("(display-mode: standalone)").matches
                            ? "standalone"
                            : window.matchMedia("(display-mode: minimal-ui)").matches
                                ? "minimal-ui"
                                : window.matchMedia("(display-mode: fullscreen)").matches
                                    ? "fullscreen"
                                    : "broswer-tab";
                        callback(displayMode);
                    });
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Detect barcodes in an image.
     * @method barcodeDetector
     */
    PWA.prototype.barcodeDetector = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var formatSupported, barcodeDetector, barcodes, error_20;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        if (!("BarcodeDetector" in window)) return [3 /*break*/, 5];
                        return [4 /*yield*/, BarcodeDetector.getSupportedFormats()];
                    case 1:
                        formatSupported = (_a.sent()).includes(options.format);
                        if (!formatSupported) return [3 /*break*/, 3];
                        barcodeDetector = new BarcodeDetector({
                            formats: [options.format],
                        });
                        return [4 /*yield*/, barcodeDetector.detect(options.image)];
                    case 2:
                        barcodes = _a.sent();
                        return [2 /*return*/, {
                                ok: barcodes ? true : false,
                                message: barcodes ? "Barcode detected" : "No barcode detected",
                                barcodes: barcodes,
                            }];
                    case 3: return [2 /*return*/, {
                            ok: false,
                            message: "Sorry, \"".concat(options.format.charAt(0).toUpperCase() + options.format.slice(1), "\" format not supported"),
                        }];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, {
                            ok: false,
                            message: "Barcode Detector API not supported",
                        }];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_20 = _a.sent();
                        throw error_20;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Access local device fonts.
     * @method accessFonts
     */
    PWA.prototype.accessFonts = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var getSFNT, fonts, _a, fonts, _b, error_21;
            var _c, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 13, , 14]);
                        getSFNT = function (availableFonts) { return __awaiter(_this, void 0, void 0, function () {
                            var outlineFormats, _i, availableFonts_1, fontData, sfntBlob, sfntVersion, outlineFormat, error_22;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 6, , 7]);
                                        outlineFormats = [];
                                        _i = 0, availableFonts_1 = availableFonts;
                                        _a.label = 1;
                                    case 1:
                                        if (!(_i < availableFonts_1.length)) return [3 /*break*/, 5];
                                        fontData = availableFonts_1[_i];
                                        return [4 /*yield*/, fontData.blob()];
                                    case 2:
                                        sfntBlob = _a.sent();
                                        return [4 /*yield*/, sfntBlob.slice(0, 4).text()];
                                    case 3:
                                        sfntVersion = _a.sent();
                                        outlineFormat = "";
                                        switch (sfntVersion) {
                                            case "\x00\x01\x00\x00":
                                            case "true":
                                            case "typ1":
                                                outlineFormat = "truetype";
                                                break;
                                            case "OTTO":
                                                outlineFormat = "cff";
                                                break;
                                        }
                                        if (outlineFormat !== "")
                                            outlineFormats.push(outlineFormat);
                                        _a.label = 4;
                                    case 4:
                                        _i++;
                                        return [3 /*break*/, 1];
                                    case 5: return [2 /*return*/, outlineFormats];
                                    case 6:
                                        error_22 = _a.sent();
                                        throw error_22;
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); };
                        if (!("queryLocalFonts" in window)) return [3 /*break*/, 11];
                        if (!(config && config.postscriptNames)) return [3 /*break*/, 5];
                        return [4 /*yield*/, window.queryLocalFonts({ postscriptNames: config.postscriptNames })];
                    case 1:
                        fonts = _e.sent();
                        _c = {
                            ok: true,
                            message: "Fonts access",
                            fonts: fonts
                        };
                        if (!config.sfnt) return [3 /*break*/, 3];
                        return [4 /*yield*/, getSFNT(fonts)];
                    case 2:
                        _a = _e.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = [];
                        _e.label = 4;
                    case 4: return [2 /*return*/, (_c.sfnt = _a,
                            _c)];
                    case 5: return [4 /*yield*/, window.queryLocalFonts()];
                    case 6:
                        fonts = _e.sent();
                        _d = {
                            ok: true,
                            message: "Fonts access",
                            fonts: fonts
                        };
                        if (!(config && config.sfnt)) return [3 /*break*/, 8];
                        return [4 /*yield*/, getSFNT(fonts)];
                    case 7:
                        _b = _e.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        _b = [];
                        _e.label = 9;
                    case 9: return [2 /*return*/, (_d.sfnt = _b,
                            _d)];
                    case 10: return [3 /*break*/, 12];
                    case 11: return [2 /*return*/, {
                            ok: false,
                            message: "Local Fonts Access API not supported",
                            fonts: null,
                        }];
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        error_21 = _e.sent();
                        throw error_21;
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Use web OTP API to get the one-time code sent to the user's device.
     * @method webOTP
     */
    PWA.prototype.webOTP = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    if ("OTPCredential" in window) {
                        window.addEventListener("DOMContentLoaded", function () { return __awaiter(_this, void 0, void 0, function () {
                            var input, ac_1, form, otp;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        input = document.querySelector('input[autocomplete="one-time-code"]');
                                        if (!input) return [3 /*break*/, 2];
                                        ac_1 = new AbortController();
                                        form = input.closest("form");
                                        if (form) {
                                            form.addEventListener("submit", function () {
                                                ac_1.abort();
                                            });
                                        }
                                        return [4 /*yield*/, navigator.credentials.get({
                                                otp: { transport: ["sms"] },
                                                signal: ac_1.signal,
                                            })];
                                    case 1:
                                        otp = (_a.sent());
                                        callback({
                                            code: otp.code,
                                            ok: true,
                                            message: "OTP received",
                                        });
                                        return [3 /*break*/, 3];
                                    case 2:
                                        callback({
                                            code: null,
                                            ok: false,
                                            message: "No input with autocomplete='one-time-code' found",
                                        });
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    else {
                        callback({
                            code: null,
                            ok: false,
                            message: "Web OTP API not supported",
                        });
                    }
                }
                catch (error) {
                    throw error;
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Select preferred way of paying for things, and make that information
     * available to a merchant.
     * @method Payment
     */
    PWA.prototype.Payment = function (paydata, validatePayment) {
        return __awaiter(this, void 0, void 0, function () {
            var paymentRequest, canPay, paymentResponse, error_23;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        paymentRequest = new PaymentRequest(paydata.paymentMethods, paydata.paymentDetails);
                        if (!paymentRequest) return [3 /*break*/, 5];
                        return [4 /*yield*/, paymentRequest.canMakePayment()];
                    case 1:
                        canPay = _a.sent();
                        if (!canPay) return [3 /*break*/, 3];
                        return [4 /*yield*/, paymentRequest.show()];
                    case 2:
                        paymentResponse = _a.sent();
                        validatePayment(paymentResponse);
                        return [2 /*return*/, { ok: true, message: "Payment" }];
                    case 3: return [2 /*return*/, { ok: false, message: "Payment method(s) not supported" }];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, { ok: false, message: "Payment Request API not supported" }];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_23 = _a.sent();
                        throw error_23;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return PWA;
}());
export default PWA;
