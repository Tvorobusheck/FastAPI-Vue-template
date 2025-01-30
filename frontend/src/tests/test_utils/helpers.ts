
export async function waitForMS(ms: number) {
    await new Promise(r => setTimeout(r, ms));
}
  
export async function waitForTestTriggers() {
    await waitForMS(1000)
}