package com.lbenitez.rest.model;

public class Book {

	private final long useId;
	private final long id;
	
	public Book(long useId, long id) {
		super();
		this.useId = useId;
		this.id = id;
	}

	public long getUseId() {
		return useId;
	}

	public long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Book [useId=" + useId + ", id=" + id + "]";
	}
	
	
	
}
