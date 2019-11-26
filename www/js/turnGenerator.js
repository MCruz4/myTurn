var turno;
var lastTurno = {retiro: 5, deposito: 8, admin: 3};
var currentTurno = {retiro: 1, deposito: 2, admin: 1};

function turnoConteo(){
    while (currentTurno <= lastTurno){
        setTimeout(passTurnoRetiro(), 5000);
        setTimeout(passTurnoDeposito(), 6000);
        setTimeout(passTurnoAdmin(), 10000);

    }
}

function passTurnoRetiro(){
    currentTurno.retiro++;
}
function passTurnoDeposito(){
    currentTurno.deposito++;
}
function passTurnoAdmin(){
    currentTurno.admin++;
}

function generateTurn(){
    
    //Seleccion de Transaccion
    if(transaccion == 'retiro'){
        lastTurno.retiro++;
        turno = 'R'+(lastTurno.retiro + 1);
    }else if(transaccion == 'deposito'){
        lastTurno.deposito++;
        turno = 'D' + (lastTurno.deposito + 1);
    }else if(transaccion == 'administrativo'){
        turno = 'A' + (lastTurno.admin + 1);
    }

    return turno;

}