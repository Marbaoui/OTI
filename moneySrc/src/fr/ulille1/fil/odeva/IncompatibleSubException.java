package fr.ulille1.fil.odeva;

public class IncompatibleSubException extends Exception {

    public IncompatibleSubException(int v1,int v2) {
        super(" erreur : "+v1+" < "+v2);
    }
}
