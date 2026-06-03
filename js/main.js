function handleSearch(e) {
    e.preventDefault();
    const query = e.target.querySelector('input').value;
    if (query.trim()) {
        window.location.href = `https://noai.duckduckgo.com/?q=${encodeURIComponent(query)}`;
    }
}