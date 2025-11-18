// exf.js
function exf(s, n) {
    for (let i = 0; i < n; i++) {
        console.log(s);
    }
}

// Export the function so it can be imported in tests
module.exports = exf;

// Example usage (optional if running as a script)
if (require.main === module) {
    exf("echo", 5);
    exf("JS from server", 10);
}
