package com.example.lbenitez.listview;

import java.util.Objects;

public class Owner {

    private String avatar_url;

    public Owner() {}

    public Owner(String avatar_url) {
        this.avatar_url = avatar_url;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public void setAvatar_url(String avatar_url) {
        this.avatar_url = avatar_url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Owner owner = (Owner) o;
        return Objects.equals(avatar_url, owner.avatar_url);
    }

    @Override
    public int hashCode() {

        return Objects.hash(avatar_url);
    }

    @Override
    public String toString() {
        return "Owner{" +
                "avatar_url=" + avatar_url +
                '}';
    }
}
