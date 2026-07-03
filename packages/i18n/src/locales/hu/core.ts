/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

export default {
  "sidebar": {
    "projects": "Projektek",
    "pages": "Oldalak",
    "new_work_item": "Új munkaelem",
    "home": "Kezdőlap",
    "your_work": "Saját munka",
    "inbox": "Beérkezők",
    "workspace": "Munkaterület",
    "views": "Nézetek",
    "analytics": "Analitika",
    "work_items": "Munkaelemek",
    "cycles": "Ciklusok",
    "modules": "Modulok",
    "intake": "Beérkezők",
    "drafts": "Piszkozatok",
    "favorites": "Kedvencek",
    "pro": "Pro",
    "upgrade": "Előfizetés",
    "stickies": "Jegyzetek"
  },
  "auth": {
    "common": {
      "email": {
        "label": "E-mail",
        "placeholder": "nev@ceg.hu",
        "errors": {
          "required": "Az e-mail cím megadása kötelező",
          "invalid": "Az e-mail cím érvénytelen"
        }
      },
      "password": {
        "label": "Jelszó",
        "set_password": "Jelszó beállítása",
        "placeholder": "Jelszó megadása",
        "confirm_password": {
          "label": "Jelszó megerősítése",
          "placeholder": "Jelszó megerősítése"
        },
        "current_password": {
          "label": "Jelenlegi jelszó"
        },
        "new_password": {
          "label": "Új jelszó",
          "placeholder": "Új jelszó megadása"
        },
        "change_password": {
          "label": {
            "default": "Jelszó módosítása",
            "submitting": "Jelszó módosítása folyamatban"
          }
        },
        "errors": {
          "match": "A jelszavak nem egyeznek",
          "empty": "A jelszó megadása kötelező",
          "length": "A jelszó hosszának legalább 8 karakternek kell lennie",
          "strength": {
            "weak": "A jelszó gyenge",
            "strong": "A jelszó erős"
          }
        },
        "submit": "Jelszó beállítása",
        "toast": {
          "change_password": {
            "success": {
              "title": "Sikerült!",
              "message": "A jelszó sikeresen módosult."
            },
            "error": {
              "title": "Hiba!",
              "message": "Valami hiba történt. Kérjük, próbáld újra."
            }
          }
        }
      },
      "unique_code": {
        "label": "Egyedi kód",
        "placeholder": "123456",
        "paste_code": "Illeszd be az e-mailben kapott kódot",
        "requesting_new_code": "Új kód kérése",
        "sending_code": "Kód küldése"
      },
      "already_have_an_account": "Már van fiókod?",
      "login": "Bejelentkezés",
      "create_account": "Fiók létrehozása",
      "new_to_plane": "Új vagy a Plane-en?",
      "back_to_sign_in": "Vissza a bejelentkezéshez",
      "resend_in": "Újraküldés {seconds} másodperc múlva",
      "sign_in_with_unique_code": "Bejelentkezés egyedi kóddal",
      "forgot_password": "Elfelejtetted a jelszavad?"
    },
    "sign_up": {
      "header": {
        "label": "Hozz létre fiókot, hogy csapatoddal együtt kezelhesd a munkát.",
        "step": {
          "email": {
            "header": "Regisztráció",
            "sub_header": ""
          },
          "password": {
            "header": "Regisztráció",
            "sub_header": "Regisztrálj e-mail és jelszó párossal."
          },
          "unique_code": {
            "header": "Regisztráció",
            "sub_header": "Regisztrálj a fenti e-mail címre küldött egyedi kóddal."
          }
        }
      },
      "errors": {
        "password": {
          "strength": "A folytatáshoz állíts be erős jelszót"
        }
      }
    },
    "sign_in": {
      "header": {
        "label": "Jelentkezz be, hogy csapatoddal együtt kezelhesd a munkát.",
        "step": {
          "email": {
            "header": "Bejelentkezés vagy regisztráció",
            "sub_header": ""
          },
          "password": {
            "header": "Bejelentkezés vagy regisztráció",
            "sub_header": "Használd az e-mail és jelszó párosod a bejelentkezéshez."
          },
          "unique_code": {
            "header": "Bejelentkezés vagy regisztráció",
            "sub_header": "Jelentkezz be a fenti e-mail címre küldött egyedi kóddal."
          }
        }
      }
    },
    "forgot_password": {
      "title": "Jelszó visszaállítása",
      "description": "Add meg a fiókodhoz tartozó megerősített e-mail címet, és küldünk egy jelszó-visszaállító hivatkozást.",
      "email_sent": "Elküldtük a visszaállító hivatkozást az e-mail címedre",
      "send_reset_link": "Visszaállító hivatkozás küldése",
      "errors": {
        "smtp_not_enabled": "Úgy tűnik, a rendszergazda nem engedélyezte az SMTP-t, ezért nem tudunk jelszó-visszaállító hivatkozást küldeni"
      },
      "toast": {
        "success": {
          "title": "E-mail elküldve",
          "message": "Nézd meg a beérkezők mappádat a jelszó visszaállításához szükséges hivatkozásért. Ha néhány percen belül nem jelenik meg, ellenőrizd a spam mappát is."
        },
        "error": {
          "title": "Hiba!",
          "message": "Valami hiba történt. Kérjük, próbáld újra."
        }
      }
    },
    "reset_password": {
      "title": "Új jelszó beállítása",
      "description": "Védd a fiókod egy erős jelszóval"
    },
    "set_password": {
      "title": "Védd a fiókod",
      "description": "A jelszó beállítása biztonságos bejelentkezést tesz lehetővé"
    },
    "sign_out": {
      "toast": {
        "error": {
          "title": "Hiba!",
          "message": "A kijelentkezés nem sikerült. Kérjük, próbáld újra."
        }
      }
    }
  }
} as const;
