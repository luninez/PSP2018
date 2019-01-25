package com.example.lbenitez.calculadoraluismi;

public class Calculadora {


    public String suma (String op1, String op2){
        int resultado = Integer.valueOf(op1) + Integer.valueOf(op2);
        return Integer.toString(resultado);
    }

    public String resta (String op1, String op2){
        int resultado = Integer.valueOf(op1) - Integer.valueOf(op2);
        return Integer.toString(resultado);
    }

}
