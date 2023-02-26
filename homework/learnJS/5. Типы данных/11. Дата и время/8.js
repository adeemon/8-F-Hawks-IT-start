let options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
}

const formatDate = (date) => {
    const dateNow = new Date();
    const diff = dateNow - date;
    if (diff < 1000) {
        return 'Прямо сейчас';
    }
    if (diff < 60000) {
        return diff / 1000 + ' сек. назад'
    }
    if (diff < 3600000) {
        return diff / 60000 + ' мин. назад'
    }
    return date.toLocaleDateString('ru-RU', options);
}

alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date - 86400 * 1000)));