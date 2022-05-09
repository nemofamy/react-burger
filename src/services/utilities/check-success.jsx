const checkSuccess = (dataset) => {
    if (dataset.success) return true;
    return Promise.reject(`Возникла непредвиденная ошибка с данными`);
}

export default checkSuccess;