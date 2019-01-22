package com.files.homework.folders.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;

//Many to One relationship-< files can be related to one folder
@Entity//allows hibernate to know what we want
@Table(name="files")
public class File implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    private String name;

    @Column(name="extension")
    private String extension;

    @Column(name = "size")
    private int size;

    @JsonIgnoreProperties(value = "files")//avoid recursive serialisation of data
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)//delete through each column
    @ManyToOne//relationship to type
    @JoinColumn(name = "folder_id", nullable = false) //fk of table Folder
    private Folder folder;

    public File(String name, String extension, int size, Folder folder) {
        this.name = name;
    }
    public File(){

    }

    public Long getId(){
        return Id;
    }


    public void setId(Long id) {
        Id = id;
    }

    public String getName(){
        return name;
    }

    public String getExtension(){
        return extension;
    }

    public void setName(String name){
        this.name = name;
    }
    public void setExtension(String extension){
        this.extension=extension;
    }
    public void setSize(int size){
        this.size=size;
    }

    public Folder getFolder() {
        return folder;
    }
    public void setFolder(Folder folder){
        this.folder = folder;
    }


    // retrieve name of User for respective folder
    public String getUserName(){
        return folder.getUser().getName();
    }

//    public String getUserTitle(){
//        return folder.getTitle();
//    }
}
