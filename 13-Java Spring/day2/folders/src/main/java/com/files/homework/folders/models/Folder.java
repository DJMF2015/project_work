package com.files.homework.folders.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import com.files.homework.folders.models.File;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;



//One to Many relationship
@Entity
@Table(name = "folders")
public class Folder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "title")
    private String title;

//    @JsonIgnoreProperties(value = "folders")

    //joincolumn  pass to join table argument with name
    //of column we wish to setup in join table
    @ManyToOne //relationship needs mapped both ways
    @JoinColumn(name = "user_id", nullable = false) //fk for User
    private User user;

//    @JsonIgnoreProperties(value = "folder")

//    @Cascade(org.hibernate.annotations.CascadeType.DELETE)
    @OneToMany(mappedBy = "folder", fetch = FetchType.LAZY)
    private List <File> files; //list to contain many files records

    public Folder(String title, User user) {
        this.title = title;
        this.user = user;
        files = new ArrayList <>();
    }

    public Folder() {

    }


    public Long getId() {
        return Id;
    }

    public void setId(Long Id) {
        this.Id = Id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List <File> getFiles() {
        return files;
    }

    public void setFiles(List <File> files) {
        this.files = files;
    }


}
