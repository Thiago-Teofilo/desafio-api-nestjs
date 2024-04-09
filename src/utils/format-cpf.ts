export function formatCpf(cpf: string): string {
  const regex = /[^0-9]/g;
  return cpf.replace(regex, '');
}
