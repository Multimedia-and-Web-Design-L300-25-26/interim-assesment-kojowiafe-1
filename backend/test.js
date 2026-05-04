async function test() {
  try {
    // 1. Register
    console.log('Testing Register...');
    const registerRes = await fetch('http://127.0.0.1:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test User', email: 'test@example.com', password: 'password123' })
    });
    const registerData = await registerRes.json();
    console.log('Register Response:', registerData);

    // 2. Login
    console.log('\nTesting Login...');
    const loginRes = await fetch('http://127.0.0.1:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'password123' })
    });
    const loginData = await loginRes.json();
    console.log('Login Response:', loginData);
    const token = loginData.token;

    // 3. Profile
    console.log('\nTesting Profile...');
    const profileRes = await fetch('http://127.0.0.1:5000/api/profile', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const profileData = await profileRes.json();
    console.log('Profile Response:', profileData);

    // 4. Create Crypto
    console.log('\nTesting Create Crypto...');
    const cryptoRes = await fetch('http://127.0.0.1:5000/api/crypto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'TestCoin',
        symbol: 'TEST',
        price: 100,
        image: 'test.png',
        change24h: 5.5
      })
    });
    const cryptoData = await cryptoRes.json();
    console.log('Create Crypto Response:', cryptoData);

  } catch(e) {
    console.error(e);
  }
}

test();
