export default function removeAccentsAndCedillaToLower(str) {
    let normalizedString = str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ç/g, "c")
        .replace(/Ç/g, "c");

    return normalizedString.toLowerCase();
}