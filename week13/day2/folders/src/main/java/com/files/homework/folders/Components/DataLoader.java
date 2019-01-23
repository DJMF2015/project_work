package com.files.homework.folders.Components;

import com.files.homework.folders.models.File;
import com.files.homework.folders.models.Folder;
import com.files.homework.folders.models.User;
import com.files.homework.folders.repository.FileRepository;
import com.files.homework.folders.repository.FolderRepository;
import com.files.homework.folders.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    FolderRepository folderRepository;

    @Autowired
    FileRepository fileRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {
        User user1 = new User("David Fulton");
        userRepository.save(user1);
        User user2 = new User("John Doe");
        userRepository.save(user2);
        User user3 = new User("Jeremy Bentham");
        userRepository.save(user3);

        Folder folder1 = new Folder("Documents", user1);
        folderRepository.save(folder1);
        Folder folder2 = new Folder("images", user2);
        folderRepository.save(folder2);
        Folder folder3 = new Folder("applications", user3);
        folderRepository.save(folder3);

        File file1 = new File("hello_world", ".java", 8000, folder1);
        fileRepository.save(file1);
        File file2 = new File("java notes", "txt", 1000, folder2);
        fileRepository.save(file2);
        File file3 = new File("class diagram", "png", 2390, folder3);
        fileRepository.save(file3);
    }
}
