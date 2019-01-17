package com.example.lbenitez.asintax;

import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText editURL;
    Button btn_ir;
    WebView webViwe;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        editURL = findViewById(R.id.editUrl);
        btn_ir = findViewById(R.id.btn_ir);
        webViwe = findViewById(R.id.webView);
        
        btn_ir.setOnClickListener(new Viwe.OnClickListener(){

            public void onLCick(View v){
                if(editURL.getText().toSTring().isEmpty()){
                    Toast.makeText(MainActivity.this, "", Toast.LENGTH_SHORT).show();
                }else{
                    new LoadWebTask().execute(editURL.getText().toString());
                }
            }

        });
        
    }

    private class LoadWebTask extends AsyncTask<String, Void, String>{

        @Override
        public String doInBackground(String... strings){
            return Downloader.downloadURL(strings[0]);
        }

        @Override
        public void onPostExecute(String s){
            Log.d("Contenido URL", s);
            webViwe.loadData(s, "text/html", "UTF-8");
        }
    }

}
