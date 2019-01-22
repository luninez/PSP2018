package com.example.lbenitez.listview;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

  ListView listView;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    listView = findViewById(R.id.listView);

    MyAdapter myAdapter = new MyAdapter(this, Arrays.asList(
      new Repo(1656543246,"android-2019","lmlopezmagana/android-2019", new Owner("https://avatars2.githubusercontent.com/u/34097584?v=4"))));

    listView.setAdapter(myAdapter);

  }
}
