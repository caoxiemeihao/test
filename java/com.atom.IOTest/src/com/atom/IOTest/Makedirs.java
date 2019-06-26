package com.atom.IOTest;

import java.io.File;
import java.io.IOException;

public class Makedirs {
	public static void main(String[] args) {
		File file = new File("D:"
				+ File.separator + "workspace"
				+ File.separator + "github"
				+ File.separator + "test"
				+ File.separator + "java"
				+ File.separator + "dir1"
				+ File.separator + "dir2"
				+ File.separator + "test.txt");

		if (!file.getParentFile().exists()) {
			file.mkdirs();
		}
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
