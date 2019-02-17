package com.files.homework.folders.models;

//one user to many folders

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.sun.xml.internal.bind.v2.model.core.ID;
import org.hibernate.annotations.Cascade;
import org.omg.PortableInterceptor.ServerRequestInfo;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity//allows hibernate to know what we want
@Table(name="users")
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "name")
    private String name;

//    @JsonIgnoreProperties(value = "user")
    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    //as can be only one user to many files
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Folder> folders;//user has a list of folderd


    public User(String name){
        this.name= name;
        folders = new ArrayList <>();

    }
    public User(){

    }

    public Long getId(){
        return Id;
    }

    public  void setId(Long id){
        this.Id = Id;
    }

    public String getName(){
        return  name;

    }


    public void setName(String name){
        this.name = name;
    }

    public List <Folder> getFolders() {
        return folders;
    }

    public void setFolders(List <Folder> folders){
        this.folders = folders;
    }
}
