document.getElementById('connectWalletButton').addEventListener('click', async () => {
    try {
        // Check if the wallet is already connected
        if (window.ethereum && window.ethereum.selectedAddress) {
            console.log('Wallet already connected:', window.ethereum.selectedAddress);
        } else {
            // Request connection to the wallet
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const selectedAddress = accounts[0];

            console.log('Wallet connected:', selectedAddress);
            // Update the user display
            document.getElementById('userDisplay').textContent = `Wallet Address: ${selectedAddress}`;
            // Show the bet form
            document.getElementById('betForm').style.display = 'block';
        }
    } catch (error) {
        console.error('Wallet connection error:', error);
    }
});
