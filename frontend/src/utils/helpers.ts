export function generateRandomString(length: number = 6): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export async function waitForMS(ms: number) {
  await new Promise(r => setTimeout(r, ms));
}

export async function waitForTestTriggers() {
  await waitForMS(1000)
}