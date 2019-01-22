package com.example.lbenitez.listview;

import java.util.Objects;

public class Repo {

    private long id;
    private String name;
    private String full_name;
    private Owner owner;

    public Repo() {}

    public Repo(long id, String name, String full_name, Owner owner) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.owner = owner;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFull_name() {
        return full_name;
    }

    public void setFull_name(String full_name) {
        this.full_name = full_name;
    }

    public Owner getOwner() {
        return owner;
    }

    public void setOwner(Owner owner) {
        this.owner = owner;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Repo repo = (Repo) o;
        return id == repo.id &&
                Objects.equals(name, repo.name) &&
                Objects.equals(full_name, repo.full_name) &&
                Objects.equals(owner, repo.owner);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, name, full_name, owner);
    }

    @Override
    public String toString() {
        return "Repo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", full_name='" + full_name + '\'' +
                ", owner=" + owner +
                '}';
    }
}
