

function calcResult({ cebr, fizika, az, kimya }) {
    const totalScore = cebr + fizika + az + kimya;
    console.log('Sizin umumi baliniz: '+totalScore);
}
calcResult({ cebr: 7, fizika: 10, az: 8, kimya: 6 });
