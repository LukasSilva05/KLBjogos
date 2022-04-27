create database carrinho;

create table jogo( 
id int not null auto_increment, 
nome varchar(40) not null, 
valor varchar(10) not null, 
primary key (id)
) default charset = utf8;