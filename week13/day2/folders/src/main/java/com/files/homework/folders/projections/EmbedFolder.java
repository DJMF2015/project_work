package com.files.homework.folders.projections;

import com.files.homework.folders.models.File;
import com.files.homework.folders.models.Folder;
import com.files.homework.folders.models.User;
import org.springframework.data.rest.core.config.Projection;


@Projection(name="embedFolder", types = User.class)
public interface EmbedFolder {
String getName();
Folder getFolder();
String getUserName();

}
