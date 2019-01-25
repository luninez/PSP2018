package com.example.lbenitez.calculadoraluismi;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

  EditText op1, op2;
  Button btn_suma, btn_resta;
  TextView result;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    op1 = findViewById(R.id.operando1);
    op2 = findViewById(R.id.operando2);
    btn_suma = findViewById(R.id.suma);
    btn_resta = findViewById(R.id.resta);
    result = findViewById(R.id.resultado);

    final Calculadora calculadora = new Calculadora();


    btn_suma.setOnClickListener(new View.OnClickListener() {
       @Override
      public void onClick(View view){
         result.setText((calculadora.suma(

         )));
       }
    });


  }
}
