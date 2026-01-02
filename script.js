// メモ帳の要素を取得
const memoElement = document.getElementById('memo');

// localStorageからメモを読み込む
const loadMemo = () => {
    const savedMemo = localStorage.getItem('memo');
    if (savedMemo) {
        memoElement.value = savedMemo;
    }
};

// メモをlocalStorageに保存する
const saveMemo = () => {
    localStorage.setItem('memo', memoElement.value);
};

// ページ読み込み時にメモを復元
window.addEventListener('DOMContentLoaded', loadMemo);

// メモが変更されたら自動保存
memoElement.addEventListener('input', saveMemo);