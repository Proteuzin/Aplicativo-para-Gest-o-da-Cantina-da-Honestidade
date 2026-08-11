# Aplicativo-para-Gest-o-da-Cantina-da-Honestidade
# 🍫 Cantina da Honestidade Digital

> Sistema de gestão para a Cantina da Honestidade do SENAI Fraiburgo - SC

---

## 📋 Sobre o Projeto

Aplicativo web para modernizar a gestão da Cantina da Honestidade, mantendo o conceito de confiança, mas adicionando controle de usuários, créditos, compras e movimentações financeiras.

**Instituição:** SENAI Fraiburgo - SC  
**Área:** Tecnologia da Informação  
**Vigência:** 13/07/2026 - 13/12/2027

-# 🍫 Cantina da Honestidade Digital

> Sistema de gestão para a Cantina da Honestidade do SENAI Fraiburgo - SC

---

## 📋 Sobre o Projeto

Aplicativo web para modernizar a gestão da Cantina da Honestidade, mantendo o conceito de confiança, mas adicionando controle de usuários, créditos, compras e movimentações financeiras.

**Instituição:** SENAI Fraiburgo - SC  
**Área:** Tecnologia da Informação  
**Vigência:** 13/07/2026 - 13/12/2027

---

## 🎯 Problema

- ❌ Produtos retirados sem pagamento
- ❌ Sem controle de quem comprou o quê
- ❌ Dificuldade na gestão financeira
- ❌ Sem sistema de créditos/saldos
- ❌ Pagamentos limitados ao troco exato

---

## 💡 Solução

Aplicativo web com:

- ✅ Cadastro de usuários
- ✅ Login (matrícula, e-mail ou CPF)
- ✅ Catálogo de produtos e preços
- ✅ Carteira digital com saldo e depósito
- ✅ Registro automático de compras
- ✅ Histórico de compras
- ✅ Painel administrativo
- ✅ Relatórios gerenciais

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização e responsividade
- **JavaScript** - Interatividade e consumo da API

### Backend
- **C#** - Lógica de negócio e API
- **SQL** - Banco de dados e consultas

---

## 📊 Modelo do Banco de Dados

### Diagrama do Banco de Dados

<!-- INSIRA A IMAGEM DO DIAGRAMA SQL AQUI -->
![Diagrama do Banco de Dados](img)
<img src="drawSQL-image-export-2026-08-11 (1).jpg" alt="Diagrama" width="80%">

> *Diagrama de relacionamento entre as tabelas do sistema*

---

### Tabela: Usuarios

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **Id** | INT (PK) | Identificador único do usuário |
| Nome | VARCHAR(100) | Nome completo do usuário |
| **Email** | VARCHAR(100) UNIQUE | E-mail para login |
| **Matricula** | VARCHAR(20) UNIQUE | Matrícula para login |
| **CPF** | VARCHAR(14) UNIQUE | CPF para login |
| SenhaHash | VARCHAR(255) | Senha criptografada |
| **Saldo** | DECIMAL(10,2) | Saldo disponível na carteira digital |
| DataCadastro | DATETIME | Data de criação da conta |
| Ativo | BIT | Status da conta (1=ativo, 0=inativo) |

> **🔑 Login:** O usuário pode acessar utilizando **CPF**, **Matrícula** ou **E-mail**.

---

### Tabela: Produtos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **Id** | INT (PK) | Identificador único do produto |
| Nome | VARCHAR(100) | Nome do produto |
| Descricao | TEXT | Descrição detalhada |
| Preco | DECIMAL(10,2) | Preço unitário |
| Quantidade | INT | Estoque disponível |
| DataCadastro | DATETIME | Data de cadastro |
| Ativo | BIT | Produto disponível? |

---

### Tabela: CarteiraDigital (Recargas)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **Id** | INT (PK) | Identificador da transação |
| **UsuarioId** | INT (FK) | ID do usuário |
| ValorDeposito | DECIMAL(10,2) | Valor depositado na carteira |
| SaldoAnterior | DECIMAL(10,2) | Saldo antes do depósito |
| SaldoPosterior | DECIMAL(10,2) | Saldo após o depósito |
| MetodoPagamento | VARCHAR(50) | Forma de pagamento (dinheiro, pix, etc) |
| DataDeposito | DATETIME | Data e hora do depósito |
| Status | VARCHAR(20) | Status da transação (confirmado, pendente) |

---

### Tabela: HistoricoCompras

| Campo | Tipo | Descrição |
|-------|------|-----------|
| **Id** | INT (PK) | Identificador da compra |
| **UsuarioId** | INT (FK) | ID do usuário que comprou |
| **ProdutoId** | INT (FK) | ID do produto comprado |
| Quantidade | INT | Quantidade comprada |
| ValorUnitario | DECIMAL(10,2) | Preço unitário no momento |
| ValorTotal | DECIMAL(10,2) | Valor total da compra |
| SaldoAnterior | DECIMAL(10,2) | Saldo antes da compra |
| SaldoPosterior | DECIMAL(10,2) | Saldo após a compra |
| DataCompra | DATETIME | Data e hora da compra |

---

## 🔗 Relacionamentos entre as Tabelas
