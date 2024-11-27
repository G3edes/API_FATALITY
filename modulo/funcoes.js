const cursos=require('./cursos')
const alunos=require('./alunos')

const getlistarcursos=function () {
    let curso=[]
    cursos.forEach(function(item) {
        curso.push(item)
    });
    return curso
}
const getlistaralunos=function(){
    let listaalunos=[]
    alunos.forEach(function(item){
        listaalunos.push
    });
    return listaalunos
}
const getmatricula=function(matricula){
    let matriculaaluno=matricula
    let aluno=[]
    let status=false
    alunos.forEach(function(item){
        if (item.matricula==matriculaaluno) {
            aluno={
                foto: item.foto,
                nome: item.nome,
                matricula: item.matricula,
                sexo: item.sexo,
                cursos: item.cursos,
                status: item.status
            }
            status=true
        }
    });
    if (status==true) {
        return aluno
    }else{
        return status
    }
    
}

const getdsredes = function (diciplina) {
    let cursoescolhido= String(diciplina).toUpperCase()
    let cursofinal=[]
    let status=false
    alunos.forEach(function(item){
        item.forEach(function(item2){
            if (String(item2.sigla).toUpperCase()==cursoescolhido) {
                cursofinal.push(item)
                status=true
            }
        })
    })
    if (status==true) {
        return cursofinal
    }else{
        return status
    }
}
const getstatus = function(statuscurso){
    let statusaluno=String(statuscurso).toUpperCase()
    let listaalunos=[]
    let status=false
    alunos.forEach(function(item){
        if (String(item.status).toUpperCase()==statusaluno) {
            listaalunos.push(item)
            status=true
        }
    })
    if (status==true) {
        return listaalunos
    }else{
        return status
    }
}
const getcursostatus= function (sigla,status) {
    let cursoescolhido=String(sigla).toUpperCase()
    let statusdocurso=String(status).toUpperCase()
    let alunosfiltro=[]
    let status=false
    alunos.forEach(function (item) {
        item.curso.forEach(function(item2){
            if (String(item2.sigla).toUpperCase()==cursoescolhido) {
                item2.disciplinas.forEach(function(item3){
                    if(String(item3.status).toUpperCase()==statusdocurso){
                        alunosfiltro.push(item)
                        status=true
                    }
                })
            }
        })
    })
    if (status==true) {
        return alunosfiltro
    }else{
        return status
    }
}

const getconclusao= function(sigla, ano){
    let cursoescolhido=String(sigla).toUpperCase()
    let anoconclusao=String(ano).toUpperCase()
    let alunosconclusao=[]
    let status=false
    alunos.forEach(function (item) {
        item.curso.forEach(function(item2){
            if (String(item2.sigla).toUpperCase()==cursoescolhido && String(item2.conclusao).toUpperCase()==anoconclusao) {
                alunosconclusao.push(item)
                status=true
            }
        })
    })
    if (status==true) {
        return anoconclusao
    }else{
        return status
    }
}
