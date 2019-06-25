package com.atom.IOTest;

import java.io.File;
import java.io.IOException;

public class FileCreate {
	public static void main(String[] args) {
		File file = new File("D:\\workspace\\github\\test\\java\\test.txt");
		if (file.exists()) {
			file.delete();
		} else {
			try {
				System.out.println(file.createNewFile());				
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
