interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

// Adding UserData interface to Window
interface Window {
  UserData: any;
}

window.UserData = {};

// Validating json format string
function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

// Veryfying UserData interface has the same interface as Window
function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === 'object' &&
    ('nome' in obj || 'email' in obj || 'cpf' in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function loadLocalStorage() {
  const localUserData = localStorage.getItem('UserData');
  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);
    if (isUserData(UserData)) {
      // Arrays of key:value
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}

loadLocalStorage();


// Get the input data and send to localStorage

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem('UserData', JSON.stringify(window.UserData));
  }
}

const form = document.querySelector<HTMLElement>('#form');
form?.addEventListener('keyup', handleInput);
