const mongoose = require("mongoose");
const express = require("express"); 

const AlunoModel = require('./model/Aluno');
const ProfessorModel = require('./model/Professor');
const FuncionarioModel = require('./model/Funcionario');
const SalaModel = require('./model/SalaDeAula');

let saveAluno = (dados)=>{
    const Aluno = new AlunoModel(dados);
    Aluno.save((err)=>{
        if(err){
            console.log("Deu PAU");
        }
    });
}

let saveProfessor = (dados)=>{
    const Professor = new ProfessorModel(dados);
    Professor.save((err)=>{
        if(err){
            console.log("Deu PAU");
        }
    });
}

let saveFuncionario = (dados)=>{
    const Funcionario = new FuncionarioModel(dados);
    Funcionario.save((err)=>{
        if(err){
            console.log("Deu PAU");
        }
    });
}

let saveSala = (dados)=>{
    const Sala = new SalaModel(dados);
    Sala.save((err)=>{
        if(err){
            console.log("Deu PAU");
        }
    });
}

module.exports = {
    saveAluno: saveAluno,
    saveFuncionario: saveFuncionario,
    saveProfessor: saveProfessor,
    saveSala: saveSala
}