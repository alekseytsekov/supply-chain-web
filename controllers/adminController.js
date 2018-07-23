
function getDate(){

    var today = new Date();
    const year = today.getFullYear();
    const month = '0' + (today.getMonth() + 1);
    const day = '0' + today.getDate();
    const hours = '0' + today.getHours();
    const minutes = '0' + today.getMinutes();
    const seconds = '0' + today.getSeconds();
    const milliSeconds = '0' + today.getMilliseconds();

    return `${year}-${month.slice(-2)}-${day.slice(-2)} ${hours.slice(-2)}:${minutes.slice(-2)}:${seconds.slice(-2)}.${milliSeconds.slice(-2)}`;
}

module.exports = {
    createWorker : async (req, res) => {
        res.render('partials/createWorker');
    },
    createWorkerPost : async (req, res) => {

        let info = {
            name : req.body.name,
            description : req.body.description
        }

        res.render('partials/createWorker');
    },
};